const fs = require('fs')

var resourcePath = '../blood-bowl-resources/'
var outputDir = '../app/races/'

var raceFiles = fs.readdirSync(resourcePath)

var races = []

for (i in raceFiles) {
    var race = JSON.parse(fs.readFileSync(resourcePath + raceFiles[i], 'utf8'));
    var raceId = race.name.toLowerCase()
    raceId = raceId.replace(/([\s])+/g, '-')
    
    // Append the race summary
    var raceSummary = {
        id: raceId,
        name: race.name,
        description: race.description
    }
    races.push(raceSummary)
    
    // Create the race details
    var raceDetails = {
        id: raceId,
        name: race.name,
        description: race.description,
        rerollCap: race.rerollCap,
        rerollPrice: race.rerollPrice,
        playerTypes: race.players
    }
    
    fs.writeFileSync( outputDir + raceId + '.json', JSON.stringify(raceDetails, null, '\t'), 'utf8')
}

fs.writeFileSync(outputDir + 'races.json', JSON.stringify(races, null, ' '), 'utf8')
