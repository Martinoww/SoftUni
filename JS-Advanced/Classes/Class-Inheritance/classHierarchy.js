function classHierarchy(){

class Figure{
    constructor(units = 'cm'){
        this.units = units;
    }

    changeUnits(val){
        this.units = val;
    }

    get area(){
        return this.mm * this.cm;
    }

    toString(){
        return `Figures units: ${this.units}`
    }
}

class Circle extends Figure{
    constructor(radius,units){
        super(units);
        this.radius = radius
    }
    get area(){
        if(this.units == 'm'){
            this.radiusForOutPut = this.radius / 100;
            return (this.radiusForOutPut ** 2 * Math.PI) ;
        }else if(this.units == 'cm'){
            this.radiusForOutPut = this.radius;
            return (this.radius ** 2 * Math.PI);
        }else if(this.units == 'mm'){
            this.radiusForOutPut = this.radius * 10;
            return (this.radiusForOutPut ** 2 * Math.PI) ;
        }
    };

    toString(){
        return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radiusForOutPut}`
    }
}

class Rectangle extends Figure{
    constructor(width, height, units){
        super(units);
        this.width = width;
        this.height = height;
    }

    get area(){
        if(this.units == 'm'){
            this.widthForOutPut = this.width / 100;
            this.heightForOutPut = this.height / 100;
            return (this.widthForOutPut * this.heightForOutPut);
        }else if(this.units == 'cm'){
            this.widthForOutPut = this.width;
            this.heightForOutPut = this.height ;
            return (this.width * this.height);
        }else if(this.units == 'mm'){
            this.widthForOutPut = this.width * 10;
            this.heightForOutPut = this.height * 10;
            return (this.widthForOutPut * this.heightForOutPut);
        }
    };

    toString(){
        return `Figures units: ${this.units} Area: ${this.area} - width: ${this.widthForOutPut}, height: ${this.heightForOutPut}`
    };
}

    return {
        Figure,
        Circle,
        Rectangle,
    }
}
classHierarchy()
