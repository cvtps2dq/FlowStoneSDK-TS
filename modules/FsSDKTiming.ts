class FsSDKTiming{
    private _sampleRate:Number;
    private _tempo:Number;
    private _sigNumerator:Number;
    private _sigDenumerator:Number;
    private _isPlaying:Boolean;
    private _isOffline:Boolean;
    private _future:String;          // Don't touch, reserved for future additions

    get sampleRate(): Number {
        return this._sampleRate;
    }

    set sampleRate(value: Number) {
        this._sampleRate = value;
    }

    get tempo(): Number {
        return this._tempo;
    }

    set tempo(value: Number) {
        this._tempo = value;
    }

    get sigNumerator(): Number {
        return this._sigNumerator;
    }

    set sigNumerator(value: Number) {
        this._sigNumerator = value;
    }

    get sigDenumerator(): Number {
        return this._sigDenumerator;
    }

    set sigDenumerator(value: Number) {
        this._sigDenumerator = value;
    }

    get isPlaying(): Boolean {
        return this._isPlaying;
    }

    set isPlaying(value: Boolean) {
        this._isPlaying = value;
    }

    get isOffline(): Boolean {
        return this._isOffline;
    }

    set isOffline(value: Boolean) {
        this._isOffline = value;
    }

    get future(): String {
        return this._future;
    }

    set future(value: String) {
        this._future = value;
    }
}

export default FsSDKTiming;