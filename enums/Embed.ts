enum Embed
{
    embedMemory   = 0,			// Default, DLL is mapped into memory and loaded from there
    embedTempFile = 1,			// DLL is extracted into %temp% folder and loaded through Windows
    embedDisabled = 2,			// DLL is not allowed to be embedded
}