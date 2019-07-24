const Utils = {
    downloadFile(data, type) {
        const blob = new Blob([data], { type: type });
        const url = window.URL.createObjectURL(blob);
        const pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
            alert('Lütfen Pop-up engelleyicinizi(AdBlocker vb.) devre dışı bırakın ve tekrar deneyin.');
        }
    },
}

export default Utils