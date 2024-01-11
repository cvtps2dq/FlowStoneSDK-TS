class FsSDKBitmap{
    private _width:Number;
    private _height:Number;
    private _stride:Number;  // bytes per line, there might be more bytes at the end of the line for memory alignment

    // TODO understand this ffs.
    private _pData:String;   // pixel data in ARGB


    get width(): Number {
        return this._width;
    }

    set width(value: Number) {
        this._width = value;
    }

    get height(): Number {
        return this._height;
    }

    set height(value: Number) {
        this._height = value;
    }

    get stride(): Number {
        return this._stride;
    }

    set stride(value: Number) {
        this._stride = value;
    }

    get pData(): String {
        return this._pData;
    }

    set pData(value: String) {
        this._pData = value;
    }
}