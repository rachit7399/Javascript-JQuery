qTeams = {aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
    };
    var sorted_object = Object.fromEntries(
        Object.entries(qTeams).sort(([,a],[,b]) => b-a)
    );
    
    for (var i in sorted_object) {
      console.log(i);
    }