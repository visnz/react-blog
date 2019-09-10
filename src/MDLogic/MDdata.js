import React from 'react';
import {fs}  from 'fs';

class MDdata extends React.Component {
    readDirSync(path){
        var pa = fs.readdirSync(path);
        pa.forEach(function(ele,index){
            var info = fs.statSync(path+"/"+ele)	
            if(info.isDirectory()){
                console.log("dir: "+ele)
                this.readDirSync(path+"/"+ele);
            }else{
                console.log("file: "+ele)
            }	
        })
    }
    render=()=>{
        console.log(this.readDirSync('../posts'));
        
        return <p></p>
    }
}
export default MDdata