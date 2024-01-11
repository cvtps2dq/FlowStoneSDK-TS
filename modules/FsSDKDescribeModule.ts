class FsSDKDescribeModule{
    private _sdkVersion:Number;      // WRITE Use @FsSdkDescribeModule::Embed to describes how the embedding is handled when exporting VST
    private _embed:Number;           // WRITE Name that appears in the toolbox
    private _name:String;            // WRITE Description that appears in tooltip/statusbar
    private _desc:String;            // WRITE Short name at the top of the module
    private _caption:String;         // WRITE Number of inputs
    private _nrInputs:Number;        // WRITE Number or outputs
    private _timerMS:Number;         // WRITE If the module need a timer, set it to the time in milliseconds, otherwise 0
    private _future:String;          // Don't touch, reserved for future additions

    get sdkVersion(): Number {
        return this._sdkVersion;
    }

    set sdkVersion(value: Number) {
        this._sdkVersion = value;
    }

    get embed(): Number {
        return this._embed;
    }

    set embed(value: Number) {
        this._embed = value;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get desc(): String {
        return this._desc;
    }

    set desc(value: String) {
        this._desc = value;
    }

    get caption(): String {
        return this._caption;
    }

    set caption(value: String) {
        this._caption = value;
    }

    get nrInputs(): Number {
        return this._nrInputs;
    }

    set nrInputs(value: Number) {
        this._nrInputs = value;
    }

    get timerMS(): Number {
        return this._timerMS;
    }

    set timerMS(value: Number) {
        this._timerMS = value;
    }

    get future(): String {
        return this._future;
    }

    set future(value: String) {
        this._future = value;
    }
}

export default FsSDKDescribeModule;