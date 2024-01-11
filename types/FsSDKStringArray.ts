class FsSDKStringArray{
    private _len:Number;
    private _pData:Array<String>;


    get len(): Number {
        return this._len;
    }

    set len(value: Number) {
        this._len = value;
    }

    get pData(): Array<String> {
        return this._pData;
    }

    set pData(value: Array<String>) {
        this._pData = value;
    }
}