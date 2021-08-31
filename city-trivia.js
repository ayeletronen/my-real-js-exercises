function guessCity(capital, coastal, famous, ancient) {
    if(ancient && famous && capital && !coastal){
        return("Jerusalem");
    }
    if(!ancient && famous && !capital && coastal){
        return("Tel Aviv");
    }
    if(ancient && !famous && !capital && coastal)
    {
        return("Acre");
    }
    if(ancient && !famous && !capital && !coastal){
        return("Katzrin");
    }
    if(!ancient && !famous && !capital && coastal){
        return("Zikim");
    }
    if(!ancient && !famous && !capital && !coastal){
        return("Musmus");
    }
    else {
        return("No other cities are recognized");
    }
}
console.log (guessCity(false, true, true, false));