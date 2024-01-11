import Entry from "./Entry"
class FsSDKDescribeIO{
    private _inputs:Array<Entry>;       // WRITE Array of Entry describing all the inputs
    private _outputs:Array<Entry>;      // WRITE Array of @FsSdkDescribeIO::Entry describing all the outputs

    //	@inputs & @outputs arrays are allocated by FS according to the
    //	@nrInputs & @nrOutputs given in previous @fsrDescribeModule call

    private _future:String;


    get inputs(): Array<Entry> {
        return this._inputs;
    }

    set inputs(value: Array<Entry>) {
        this._inputs = value;
    }

    get outputs(): Array<Entry> {
        return this._outputs;
    }

    set outputs(value: Array<Entry>) {
        this._outputs = value;
    }

    get future(): String {
        return this._future;
    }

    set future(value: String) {
        this._future = value;
    }
}

export default FsSDKDescribeIO;