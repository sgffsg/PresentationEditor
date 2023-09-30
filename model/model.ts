type AppModel = {
    readonly presentation: Presentation,
    selection: SelectionType,
    history: History
}

type History = {
    current: number,
    presStates: Array<Presentation>
}

type Presentation = {
    readonly title: string,
    readonly slides: Array<Slide>,
}

type SelectionType = {
    slideIDs: number[],
    elementIDs: number[],
    lastSlideId: number,
    lastElementId: number,
}

type Slide = {
    readonly "ID": number,
    readonly "backGround": BackGround,
    readonly "slideElements": Array<SlideElement>,
}

type BackGround = {
    readonly "color": string,
    readonly "backImg": string
}

type SlideElement = {
    readonly "id": number,
    readonly "layer": number,
    readonly "elementType": TextElement | Img | Shape
}

type TextElement = {
    readonly "str": string,
    readonly "font": string,
    readonly "fontSize": number,
    readonly "leftTop": Point,
    readonly "rightBottom": Point
}

type Point = {
    readonly "x": number,
    readonly "y": number
}

type Img = {
    readonly "imgData": string,
    readonly "position": Point,
    readonly "width": number,
    readonly "height": number
}

type Shape = {
    readonly "color": string,
    readonly "borderColor": string,
    readonly "shapeType": Circle | Rectangle | Triangle
}

type Circle = {
    readonly "radius": number,
    readonly "position": Point
}

type Rectangle = {
    readonly "leftTop": Point,
    readonly "rightBottom": Point
}

type Triangle = {
    readonly "position1": Point,
    readonly "position2": Point,
    readonly "position3": Point
}

export {
    AppModel, 
    History, 
    Presentation, 
    SelectionType,
    Slide,
    SlideElement,
    BackGround, 
    TextElement, 
    Img,
    Point, 
    Shape,
    Circle, 
    Rectangle, 
    Triangle, 
}
