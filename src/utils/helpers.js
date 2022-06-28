const textSlicer = (str) => {
    var maxStr = 28
    if (str.length > maxStr) { 
        str = str.slice(0, maxStr) + "...";
    }
    return str
    
}

export default textSlicer