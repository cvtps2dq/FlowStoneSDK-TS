enum FsSdkRequest
{
    fsrInit					= 0,	// passes READ NULL
    //	called after the DLL is attached
    fsrDeInit				= 1,	// passes READ NULL
    //	called before the DLL is detached
    fsrDescribeModule		= 2,	// passes WRITE @FsSdkDescribeModule
    //	called to get general information about a Module
    fsrDescribeIO			= 3,	// passes WRITE @FsSdkDescribeIO
    //	called to get information about a single I/O connector
    fsrCreateInstance		= 4,	// passes READ/WRITE @FsSdkCreateInstance
    //	called when an instance of the module is created
    fsrDestroyInstance		= 5,	// passes READ pInstance for de-allocation from earlier @fsrCreateInstance
    //	called when an instance of a module gets destroyed
    fsrSaveInstanceSize		= 6,	// passes READ/WRITE @FsSdkSaveInstanceSize
    //	called to get information on how much memory is required for saving module instance data
    //	FS will allocate this size of memory and pass it into @fsrSaveInstanceData call
    //	for the module to write into
    fsrSaveInstanceData		= 7,	// passes READ/WRITE @FsSdkSaveInstanceData
    //	called to save module instance data to disk or clipboard
    fsrTrigger				= 8,	// passes READ @FsSdkTrigger
    //	called when a trigger is received on a green/yellow input or timer/schematic event
    fsrStream				= 9,	// passes READ/WRITE @FsSdkStream
    //	called when the module has at least one stream input or output to process
}