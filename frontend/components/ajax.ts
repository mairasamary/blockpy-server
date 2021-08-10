
declare global {
    var $URL_ROOT: string;
    var $MAIN_BLOCKPY_EDITOR: any;
}

export function ajax_get(url: string, data: any) {
    return $.get(window["$URL_ROOT"]+url, data);
}

export function hideOverlay() {
    $('.overlay').hide();
}
export function showOverlay() {
    $('.overlay').show();
}