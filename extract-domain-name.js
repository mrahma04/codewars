const extractHost = (url) => {
    return url.replace(/(?:https?:\/\/)(www\.)?/, '').split('.')[0]
}

console.log(extractHost('https://www.google.com'))
console.log(extractHost('http://github.com/carbonfive/raygun'))
console.log(extractHost('http://www.zombie-bites.com'))
console.log(extractHost('https://www.cnet.com'))

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

const domainName = url => url.replace(/https?:\/\/(?:www\.)?/, "").split(".")[0]

