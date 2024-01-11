enum Index
{
    tiTimingChanged		= -4,		// Trigger when timing info changed (eg. sample rate, tempo,...), use @FsSdkTrigger::timing
    tiAfterDuplicate	= -3,		// Trigger after a module gets pasted
    tiAfterLoad			= -2,		// Trigger after a schematic was loaded completely
    tiTimer				= -1,		// A timer trigger at the rate set with @FsSdkDescribeModule::timerMS
    tiFirstInput		=  0,		// The first input, every other input is relative to this
}