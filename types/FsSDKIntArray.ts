class FsSDKFloatArray{
    private _len:Number;
    private _pData:Array<number>;


    get len(): Number {
        return this._len;
    }

    set len(value: Number) {
        this._len = value;
    }

    get pData(): Array<number> {
        return this._pData;
    }

    set pData(value: Array<number>) {
        this._pData = value;
    }
}

export default FsSDKFloatArray;