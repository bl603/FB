var images=[
    "https://th.bing.com/th/id/R.5927699426d630cbe379b6483eacfcf5?rik=vivkRrOYjlfjQg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxig%2f6ex%2fxig6exprT.png&ehk=1IxwiAqyTKf%2bBXb0aq45yQ12P550565QJtgBSzwZ%2f38%3d&risl=&pid=ImgRaw&r=0",
    "https://thumb7.shutterstock.com/display_pic_with_logo/265489/142692979/stock-vector-cartoon-dad-vector-clip-art-illustration-with-simple-gradients-all-in-a-singe-layer-142692979.jpg",
    "https://www.netclipart.com/pp/m/18-183564_lukes-little-sister-brother-face-clipart.png",
    "Ben.jpg"
];
var names=[
    "Mom",
    "Dad",
    "Sister",
    "Myself"
];
var i=0;
function update(){
    var result=5;
    if(i>result){
        i=0;
    }
    var updateImage=images[i];
    var updateNames=names[i];
    document.getElementById("family_member_image").src=updateImage;
    document.getElementById("family_member_names").innerHTML=updateNames;
    i++;
}