function getAllPathIdsInSvg(svg : string) : string[] {

    const ids : string[] = [];
    const pathsRegex = /<path((.|\n|\r)*?)(\/|<\/path)>/g;
    const idRegex = / id[ \t]*=[ \t]*"(.*)"/g;

    const paths = svg.match(pathsRegex);

    if(paths == null) {
        return ids;
    }

    for(const path of paths) {
        const idMatches = path.match(idRegex);
        if(idMatches == null) {
            continue;
        }

        if(idMatches.length == 0) {
            continue;
        }

        let id : string = "";
        const idSplit : string[] = idMatches[0].split("\"");
        if(idSplit.length < 2) {
            continue;
        }   
        
        id = idSplit[1].replace("\"", "");

        if(id != "") {
            ids.push(id);
        }
    }

    return ids;
}

export {getAllPathIdsInSvg}