class Entry{
    private _type:Number;            // WRITE @FsSdkDescribeIO::Type of the IO
    private _name:String;            // WRITE Name of the IO that appears on the module
    private _desc:String;            // WRITE Description that appears next to the IO, when the module is selected
    private _autoTrigger:Boolean;    // WRITE Input only, when set to true there will be a triggers, when connecting to it
    private _future:String;          // Don't touch, reserved for future additions

    get type(): Number {
        return this._type;
    }

    set type(value: Number) {
        this._type = value;
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

    get autoTrigger(): Boolean {
        return this._autoTrigger;
    }

    set autoTrigger(value: Boolean) {
        this._autoTrigger = value;
    }

    get future(): String {
        return this._future;
    }

    set future(value: String) {
        this._future = value;
    }
}

export default Entry;