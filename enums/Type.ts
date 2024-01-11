enum Type
{
    iotNone        =  0,		// Should never occur, just an "unset" value
    iotString      =  1,		// pData is char*
    iotFloat       =  2,		// pData is float*
    iotInt         =  3,		// pData is int*
    iotMono        =  6,		// MonoStream, accessed through @fsrStream
    iotArea        =  8,		// pData is @FsSdkArea*
    iotTrigger     =  9,		// pData is NULL
    iotColor       = 13,		// pData is @FsSdkColor*
    iotBoolean     = 15,		// pData is bool*
    iotBitmap      = 16,		// pData is @FsSdkBitmap*
    iotFloatArray  = 23,		// pData is @FsSdkFloatArray*
    iotIntArray    = 24,		// pData is @FsSdkIntArray*
    iotMono4       = 28,		// MonoStream, accessed through @fsrStream
    iotPointArray  = 29,		// pData is @FsSdkPointArray*
    iotMonoBoolean = 31,		// MonoStream, accessed through @fsrStream
    iotStringArray = 33,		// pData is @FsSdkStringArray*
    iotPoint       = 52,		// pData is @FsSdkPoint*
}