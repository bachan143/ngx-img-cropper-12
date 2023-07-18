import { Point } from './point';
import { CropperSettings } from '../cropper-settings';
export class Handle {
    constructor(x, y, radius, settings) {
        this.cropperSettings = new CropperSettings();
        this.over = false;
        this.drag = false;
        this._position = new Point(x, y);
        this.offset = new Point(0, 0);
        this.radius = radius;
        this.cropperSettings = settings;
    }
    setDrag(value) {
        this.drag = value;
        this.setOver(value);
    }
    draw(ctx) {
        // this should't be empty
    }
    setOver(over) {
        this.over = over;
    }
    touchInBounds(x, y) {
        return (x > this.position.x - this.radius + this.offset.x &&
            x < this.position.x + this.radius + this.offset.x &&
            y > this.position.y - this.radius + this.offset.y &&
            y < this.position.y + this.radius + this.offset.y);
    }
    get position() {
        return this._position;
    }
    setPosition(x, y) {
        this._position.x = x;
        this._position.y = y;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9uZ3gtaW1nLWNyb3BwZXIvcHJvamVjdHMvbmd4LWltZy1jcm9wcGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jcm9wcGVyL21vZGVsL2hhbmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWdCdEQsTUFBTSxPQUFPLE1BQU07SUFVakIsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWMsRUFBRSxRQUF5QjtRQUZwRSxvQkFBZSxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO1FBRzlELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxPQUFPLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBNkI7UUFDdkMseUJBQXlCO0lBQzNCLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBYTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRU0sYUFBYSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3ZDLE9BQU8sQ0FDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxXQUFXLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xyXG5pbXBvcnQgeyBDcm9wcGVyU2V0dGluZ3MgfSBmcm9tICcuLi9jcm9wcGVyLXNldHRpbmdzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhhbmRsZSB7XHJcbiAgb3ZlcjogYm9vbGVhbjtcclxuICBkcmFnOiBib29sZWFuO1xyXG4gIHBvc2l0aW9uOiBQb2ludDtcclxuICBvZmZzZXQ6IFBvaW50O1xyXG4gIHJhZGl1czogbnVtYmVyO1xyXG4gIGNyb3BwZXJTZXR0aW5nczogQ3JvcHBlclNldHRpbmdzO1xyXG4gIHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcclxuICBzZXREcmFnKHZhbHVlOiBib29sZWFuKTogdm9pZDtcclxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZDtcclxuICBzZXRPdmVyKG92ZXI6IGJvb2xlYW4pOiB2b2lkO1xyXG4gIHRvdWNoSW5Cb3VuZHMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGFuZGxlIGltcGxlbWVudHMgSUhhbmRsZSB7XHJcbiAgcHVibGljIG92ZXI6IGJvb2xlYW47XHJcbiAgcHVibGljIGRyYWc6IGJvb2xlYW47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICBwcml2YXRlIF9wb3NpdGlvbjogUG9pbnQ7XHJcbiAgcHVibGljIG9mZnNldDogUG9pbnQ7XHJcbiAgcHVibGljIHJhZGl1czogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY3JvcHBlclNldHRpbmdzOiBDcm9wcGVyU2V0dGluZ3MgPSBuZXcgQ3JvcHBlclNldHRpbmdzKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc2V0dGluZ3M6IENyb3BwZXJTZXR0aW5ncykge1xyXG4gICAgdGhpcy5vdmVyID0gZmFsc2U7XHJcbiAgICB0aGlzLmRyYWcgPSBmYWxzZTtcclxuICAgIHRoaXMuX3Bvc2l0aW9uID0gbmV3IFBvaW50KHgsIHkpO1xyXG4gICAgdGhpcy5vZmZzZXQgPSBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RHJhZyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldE92ZXIodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIC8vIHRoaXMgc2hvdWxkJ3QgYmUgZW1wdHlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRPdmVyKG92ZXI6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlciA9IG92ZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG91Y2hJbkJvdW5kcyh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgeCA+IHRoaXMucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzICsgdGhpcy5vZmZzZXQueCAmJlxyXG4gICAgICB4IDwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5yYWRpdXMgKyB0aGlzLm9mZnNldC54ICYmXHJcbiAgICAgIHkgPiB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnJhZGl1cyArIHRoaXMub2Zmc2V0LnkgJiZcclxuICAgICAgeSA8IHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzICsgdGhpcy5vZmZzZXQueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcG9zaXRpb24oKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wb3NpdGlvbi54ID0geDtcclxuICAgIHRoaXMuX3Bvc2l0aW9uLnkgPSB5O1xyXG4gIH1cclxufVxyXG4iXX0=