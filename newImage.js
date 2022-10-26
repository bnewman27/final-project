function newImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}


function backgroundImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'static'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}