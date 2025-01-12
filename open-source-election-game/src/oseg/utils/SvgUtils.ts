function getAllPathIdsInSvg(svg : string) : string[] {
    const pathsRegex = /<path((.|\n)*?)(\/|<\/path)>/g;
    const idRegex = / id[ \t]*=[ \t]*"(.*)"/g;

    const paths = svg.match(pathsRegex);
    if(paths == null) {
        return [];
    }

    const ids = [];

    for(const path of paths) {
        const idMatches = path.match(idRegex);
        if(idMatches == null) {
            continue;
        }
        const id = idMatches[0].split("\"")[1].replace("\"", "");
        if(id != undefined) {
            ids.push(id);
        }
    }

    return ids;
}

export {getAllPathIdsInSvg}