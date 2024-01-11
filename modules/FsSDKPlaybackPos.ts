class FsSDKPlaybackPos{
    private _ppq:Number;
    private _barStartPos:Number;
    private _future:String;      // Don't touch, reserved for future additions

    get ppq(): Number {
        return this._ppq;
    }

    set ppq(value: Number) {
        this._ppq = value;
    }

    get barStartPos(): Number {
        return this._barStartPos;
    }

    set barStartPos(value: Number) {
        this._barStartPos = value;
    }

    get future(): String {
        return this._future;
    }

    set future(value: String) {
        this._future = value;
    }

}
export default FsSDKPlaybackPos;