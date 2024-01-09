(function () {
    if (this instanceof arguments.callee) {
        function rand (min, max) {
            if (min >= max) {
                min = 0;
            }
            max -= (min - 1);
            return Math.random() * max % max + min;
        }
        const self = this;
        const radian = Math.PI / 180;
        function Yeeeee (sup) {
            var Weeeee = document.createElement("man");
            sup.append(Weeeee);

            var r = rand(0, 250);
            (function () {
                this.width = this.height = r;
                var cR = rand(0, 255),
                    cG = rand(0, 255),
                    cB = rand(0, 255);
                this.backgroundColor = `rgba(${cR}, ${cG}, ${cB}, .05)`;
            }.bind(Weeeee.style))("Styling");

            var x = rand(50, sup.clientWidth - r),
                y = rand(50, sup.clientHeight - r),
                v = (1000-r*4) / (1000/3) + 1,
                angle = rand(0, 360),
                deltaX,
                deltaY;

            function calcDelta (v) {
                deltaX = Math.cos(angle * radian) * v;
                deltaY = Math.sin(angle * radian) * v;
            }

            /**
             * Kiểm tra va chạm
             * return:
             *      -1 === không va chạm
             *       0 === va chạm
             *      >0 dự kiến va chạm
             */
            function checkCollisionVsBoxBorder(cRect, pRect) {
                // left, right, top, bottom
                var cL, cR, cT, cB; // child
                var pL, pR, pT, pB; // parent

                cL = cRect.left;
                cR = cRect.right;
                cT = cRect.top;
                cB = cRect.bottom;

                pL = pRect.left;
                pR = pRect.right;
                pT = pRect.top;
                pB = pRect.bottom;

                if (cL <= pL) return 0;
                if (cR >= pR) return 0;
                if (cT <= pT) return 0;
                if (cB >= pB) return 0;

                return -1;
            }

            calcDelta(v);
            this.Tiktok = function () {
                var crash = checkCollisionVsBoxBorder(this.getBoundingClientRect(), sup.getBoundingClientRect());
                if (crash > 0) {
                    calcDelta(crash);
                } else if (crash == 0) {
                    angle += rand(0, 180);
                    angle %= 360;
                    calcDelta(v);
                }

                x += deltaX;
                y += deltaY;

                x = Math.max(x, 0);
                y = Math.max(y, 0);

                x = Math.min(x, sup.clientWidth - r + 1);
                y = Math.min(y, sup.clientHeight - r + 1);
                

                (function () {
                    this.left = x + "px";
                    this.top = y + "px";
                }.bind(Weeeee.style)("Styling"));
            }.bind(Weeeee);
        }
        arguments[{}-+-{}^{}-+-{}][[]+[]] = function (sup) {
            self.Yooooo = Array.from(Array((!![]+!![])*(!![]+!![])*(!![]+!![])*(!![]+!![])*(!![]+!![])*(!![]+!![])))
                .map(()=>new Yeeeee(sup));
            console.log(sup, self.Yooooo);
        };
        (function () {
            if (arguments.length) {
                Array.from(self.Yooooo || []).map(Douyin => Douyin.Tiktok).forEach(Tick=>Tick());
            } else {
                console.log(Yeeeee);
            }
            requestAnimationFrame(arguments.callee);
        })();
    } else new arguments.callee(this);
})();
