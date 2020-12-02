export default function Icon({ type,name, size, ...props }) {
    var fontSize;
    switch (size) {
        case "big":
            fontSize = "40px"
            break;
        case "medium":
            fontSize = "30px"
            break;
        case "small":
            fontSize = "20px"
            break;
        default:
            fontSize = "28px"
            break;
    }
    var fontType;
    switch (type) {
        case "brand":
            fontType = "fab"
            break;
        case "regular":
            fontType = "far"
            break;
        case "solid":
            fontType = "fas"
            break;
        default:
            fontType = "fa"
            break;
    }
    return (
        <i {...props} className={`${fontType} fa-${name}`} style={{ fontSize }}></i>
    )
}