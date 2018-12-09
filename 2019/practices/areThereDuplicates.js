function areThereDuplicates(...arr) {
    const uniq = new Set(arr);
    
    return uniq.size !== arr.length
}