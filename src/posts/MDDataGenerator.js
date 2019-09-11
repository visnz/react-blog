var fs = require('fs');
var path = require('path');

// MetaData:
//  title
//  date
//  categories
//  tags
//  draft
//  img
//  desc

//调用文件遍历方法
var filter = new RegExp('.md$');

var fileList = [] // 获取文件列表
fileDisplay(path.resolve('.'))
console.log("文件列表 获取完毕");

var AllMDData = [] // 获取文件元数据
setTimeout(() => {
    fileList.map((e) => getInfo(e, AllMDData))
    console.log("文件元数据 获取完毕");
}, 1500);


setTimeout(() => {
    fs.writeFile("./MDdata.json", JSON.stringify(AllMDData), () => { })
    console.log("MDdata.json 写入完毕");
}, 3000);



setTimeout(() => {
    var timeline=sort(AllMDData, "timeline")
    fs.writeFileSync("./MDdata.timeline.json", JSON.stringify(timeline), () => { })
    console.log("MDdata.timeline.json 写入完毕");
    console.log("=====================================================");

    fs.writeFileSync("./MDdata.categories.json", JSON.stringify(sort(timeline, "categories")),  () => { })
    console.log("MDdata.categories.json 写入完毕");
    console.log("=====================================================");
    
    fs.writeFileSync("./MDdata.tagTable.json", JSON.stringify(sort(timeline, "tags")),  () => { })
    console.log("MDdata.tagTable.json 写入完毕");
    console.log("=====================================================");

    
    fs.writeFileSync("./MDdata.mapRorReact.js", 
        JSON.stringify(renderMapForReact(timeline))
        .replace('{','const data={')
        .replace('}','}; export default data;')
        .replace(/:"require\(/g,':require(')
        .replace(/\)"/g,')')
            ,  () => { })
    console.log("MDdata.mapRorReact.json 写入完毕");
    console.log("=====================================================");

    fs.writeFileSync("./MDdata.imageMapForReact.js", 
    JSON.stringify(renderImageMapForReact(timeline))
    .replace('{','const data={')
    .replace('}','}; export default data;')
    .replace(/:"require\(/g,':require(')
    .replace(/\)"/g,')')
        ,  () => { })
    console.log("MDdata.mapRorReact.json 写入完毕");
    console.log("=====================================================");

}, 4500);


function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, function (err, files) {
        if (err) {
            console.warn(err)
        } else {  //遍历读取到的文件列表
            files.forEach(
                (filename) => {//获取当前文件的绝对路径
                    var filedir = path.join(filePath, filename);
                    //根据文件路径获取文件信息，返回一个fs.Stats对象
                    fs.stat(filedir, (eror, stats) => {
                        if (eror) {
                            console.warn('获取文件stats失败');
                        } else {
                            if (stats.isFile() && filter.exec(filedir)) {
                                fileList.push(filedir);
                            }
                            if (stats.isDirectory()) {
                                fileDisplay(filedir);
                                //递归，如果是文件夹，就继续遍历该文件夹下面的文件
                            }
                        }
                    })
                }
            );
        }
    });
}
var index = 0
function getInfo(MDfile, ArrayToSave) {
    var mddata = {}
    mddata.index = index++
    mddata.filePath = MDfile
    mddata.displayName= path.basename(MDfile).split(".md")[0]
    new Promise((resolve, reject) => {
        fs.readFile(MDfile, 'utf-8', (err, data) => {
            if (err) { reject(err); }
            else { resolve(data); }
        });
    })
        .then((data) => {
            var tmp = []
            data.split("---")[1]
                .split(/[\r\n]/)
                .map((e) => {
                    e !== "" && tmp.push(e)
                    return 0
                })
            tmp.map((e) => {
                var arr = e.split(": ")
                switch (arr[0]) {
                    case 'title':
                        mddata.title = arr[1].substring(1, arr[1].length - 1)
                        break;
                    case 'date':
                        mddata.date = arr[1]
                        break;
                    case 'categories':
                        // 兼容老笔记
                        mddata.categories = JSON.parse(arr[1])[0]
                        break;
                    case 'collection':
                        mddata.categories = arr[1]
                        break;
                    case 'tags':
                        mddata.tags = JSON.parse(arr[1])
                        break;
                    case 'draft':
                        mddata.draft = arr[1] === 'true' ? true : false
                        break;
                    case 'featuredImage':// 兼容老笔记
                    case 'img':
                        mddata.img = arr[1].substring(1, arr[1].length - 1)
                        break;
                    case 'description':// 兼容老笔记
                    case 'desc':
                        mddata.desc = arr[1].substring(1, arr[1].length - 1)
                        break;
                    default:
                }
                if (mddata.tags === undefined) mddata.tags = []
                return 0
            })
            // console.log(mddata);
            var hreftmp=MDfile.split("\\")
            mddata.href="/"+mddata.categories+"/"+hreftmp[hreftmp.length-1].split(".")[0]

            ArrayToSave.push(mddata)
        })
        .catch((err) => { throw err; })
}
// 1. 时间顺序
// 2. 按tag筛选[n个]
// 3. 按分类筛选[n个]

function sort(data, type) {
    // console.log(data);

    switch (type) {
        case "timeline":
            var timeline = []
            for (let j = 0; j < data.length; j++) {
                if (data[j].draft == true) { continue }
                // 如果是草稿就直接跳过
                if (timeline.length === 0) {
                    timeline.push(data[j]);
                    continue;
                    // 如果没有项目则新增第一个
                }
                var deal = false
                for (let i = 0; i < timeline.length; i++) {
                    // 遍历时间线顺序，插入排序
                    // console.log(timeline[i].date,"<",data[j].date,"?");
                    if (new Date(timeline[i].date) < new Date(data[j].date)) {
                        timeline.splice(i, 0, data[j])
                        deal = true
                        break;
                    }
                }
                if (!deal) timeline.push(data[j])
            }
            return timeline
        case "tags":
            var tags =new Map()
            for (let j = 0; j < data.length; j++) {
                if (data[j].draft == true) { continue }
                // 如果是草稿就直接跳过
                for (let i = 0; i < data[j].tags.length; i++) {
                    var tag = data[j].tags[i]
                    if (tags[tag] === undefined) {
                        tags[tag] = []
                    }
                    tags[tag].push(data[j])
                }
            }
            return tags
        case "categories":
            var categories=new Map()
            for (let j = 0; j < data.length; j++) {
                if (data[j].draft == true) { continue }
                // 如果是草稿就直接跳过
                
                    if(data[j].categories===undefined){continue}
                    if (categories[data[j].categories] === undefined) {
                        categories[data[j].categories] = []
                    }
                    categories[data[j].categories].push(data[j])
                
            }
            return categories

        default:
            return null
    }
 
}

function renderMapForReact(data){
    var map=new Map()
    for(var i of data){
        map[i.displayName]="require('"+i.filePath+"')"
    }
    return map
}
function renderImageMapForReact(data){
    var map=new Map()
    for(var i of data){
        map[i.displayName]="require('"+i.img+"')"
    }
    return map
}