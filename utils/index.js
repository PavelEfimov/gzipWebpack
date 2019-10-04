const getData = (data, count) => {
   return data.slice(0, count);
};

const createLinkAndDown = (blob, fileName) => {
    const a = document.createElement('a');
    a.href = blob;
    a.setAttribute('target', '_blank');
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

};

const saveFile = (fileName, data) => {
    const blobURL = generateBlobUrl(data, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

    createLinkAndDown(blobURL, fileName);
};

const generateBlobUrl = (arrayBuffer, name, type) => {
    return URL.createObjectURL(new File([arrayBuffer], name, { type }));
};

module.exports = {
    getData,
    saveFile
};
