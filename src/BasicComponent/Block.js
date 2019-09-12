const PTable=[
    "1px",
    "2px",
    "4px",
    "8px",
    "16px",
    "32px",
    "64px",
    "128px"
]
const xyPlan={
    "xs":PTable[1]+" "+PTable[2],
    "s":PTable[2]+" "+PTable[3],
    "m":PTable[3]+" "+PTable[4],
    "l":PTable[4]+" "+PTable[5],
    "xl":PTable[5]+" "+PTable[6],
}
const yPlan={
    "xl":{marginTop:PTable[7],marginButton:PTable[7]},
    "l":{marginTop:PTable[6],marginButton:PTable[6]},
    "m":{marginTop:PTable[5],marginButton:PTable[5]},
    "s":{marginTop:PTable[4],marginButton:PTable[4]},
    "xs":{marginTop:PTable[3],marginButton:PTable[3]},
}

export {xyPlan,yPlan}