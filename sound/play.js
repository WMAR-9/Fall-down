let SoundNode,Mute,Song,Sound={

};
PlaySound=s=>{
    zzfx(...Sound[s])
}
PlaySong=s=>{
    zzfxV=1
    var SongData = zzfxM(...Sound[s])
    if(SoundNode)SoundNode.stop()
    SoundNode = zzfxP(...SongData)
    SoundNode.loop=1;
}
StopSong=_=>{
    zzfxV=0
    SoundNode.stop()
}
CanPlaysong=_=>{
    Mute?0:PlaySong(Song)
}