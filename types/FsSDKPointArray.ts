import FsSDKPoint from "./FsSDKPoint";
class FsSDKPointArray{
    private _len:Number;
    private _pData:Array<FsSDKPoint>;


    get len(): Number {
        return this._len;
    }

    set len(value: Number) {
        this._len = value;
    }

    get pData(): Array<FsSDKPoint> {
        return this._pData;
    }

    set pData(value: Array<FsSDKPoint>) {
        this._pData = value;
    }
}

export default FsSDKPointArray;