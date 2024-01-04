//242
var isAnagram = function(s, t) {
    let sarray = s.split("");
    let tarray = t.split("");
    sarray.sort();
    tarray.sort();
    if (sarray.toString()==tarray.toString())
    {return true;}
    else 
    {return false;}
};