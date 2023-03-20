window.jsPDF = window.jspdf.jsPDF;
const elementToPdf = document.getElementById('cv');
const saveBtn = document.getElementById('savePdf')
const width = elementToPdf.clientWidth;
const height = elementToPdf.clientHeight;

saveBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    // html2canvas(elementToPdf),{
    //     dpi:300,
    //     scale:3,
    //     onrendered: function(canvas){
    //         let img = canvas.toDataUrl('image/jpeg',1);
    //         let doc = new jsPDF('L','pt',[width,height]);
    //         doc.addImage(img,'JPEG',0,0,width,height)
    //         doc.save('KanybekSydykovCV.pdf')
    //     }
    // }

    let docPdf = new jsPDF();
    docPdf.html(elementToPdf),{
        callback: function(docPDF) {
            docPDF.save('HTML Linuxhint web page.pdf');
           },
           x: 0,
           y: 0,
           width,
           height
    }
})
console.log(width,height);