// http://www.kevs3d.co.uk/dev/scratchpad/
ctx.clearRect(0,0,width, height);

radius=20;
KennedyCircle(width/2, height/2, radius);
WuCircle(width/4, height/2, radius);

function Plot8CirclePoints(x, y, cx, cy)
{
        ctx.fillRect(cx+x, cy+y, 1, 1);
        ctx.fillRect(cx-x, cy+y, 1, 1);
        ctx.fillRect(cx-x, cy-y, 1, 1);
        ctx.fillRect(cx+x, cy-y, 1, 1);
        ctx.fillRect(cx+y, cy+x, 1, 1);
        ctx.fillRect(cx-y, cy+x, 1, 1);
        ctx.fillRect(cx-y, cy-x, 1, 1);
        ctx.fillRect(cx+y, cy-x, 1, 1);
}

function KennedyCircle(cx, cy, r)
{
    var x=r;
    var y=0;
    var dx=1-2*r;
    var dy=1;
    var err=0;

    while (x >= y) 
    {
        Plot8CirclePoints(x, y, cx, cy);
        y++;
        err=err+dy;
        dy=dy+2;
        if (2*err + dx > 0) 
        {
            x--;
            err=err+dx;
            dx=dx+2;
        }
    }
}

function WuCircle(cx, cy, r)
{
    var x=r;
    var y=0;
//    Plot8CirclePoints(x, y, cx, cy);
    ctx.fillRect(cx+x, cy+y, 1, 1);
    ctx.fillRect(cx-x, cy+y, 1, 1);
    ctx.fillRect(cx+y, cy+x, 1, 1);
    ctx.fillRect(cx+y, cy-x, 1, 1);
    x--;
    var t=0;

    while (x > y)
    {
        y=y+1;
        var d=WuD(r,y);
        if (d < t)
        {
            x=x-1;
        }
        ctx.fillStyle = "rgba(" + 0 + "," + 0 + "," + 0 + "," + d/255 + ")";
        Plot8CirclePoints(x, y, cx, cy);
        ctx.fillStyle = "rgba(" + 0 + "," + 0 + "," + 0 + "," + (1.0 - d/255) + ")";
        Plot8CirclePoints(x+1, y, cx, cy);
        t=d;
    }
}

function WuD(r, y)
{
    var t=Math.sqrt(r*r-y*y);
    return Math.floor(255*(Math.ceil(t) - t)+.5);
}

