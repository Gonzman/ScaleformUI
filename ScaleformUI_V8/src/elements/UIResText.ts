import { Font } from "elements/font";
import { Rgba } from "math/rgba";
import { Vector2 } from "math/vector2";

export type TextAlignment = 0 | 1 | 2;

export class UIResText {
    public caption: string;
    public position: Vector2;
    public scale: number;
    public color: Rgba;
    public font: Font;
    public textAlignment: TextAlignment;
    public shadow = true;
    public outline = true;
    public wrap = 0;

    constructor(
        caption: string,
        position: Vector2,
        scale: number,
        color = Rgba.white,
        font = Font.CHALET_COMPRIME_COLOGNE,
        textAlignment: TextAlignment = 1
    ) {
        this.caption = caption;
        this.position = position;
        this.scale = scale;
        this.color = color;
        this.font = font;
        this.textAlignment = textAlignment;
    }

    private static addLongString(input: string) {
        const encoder = new TextEncoder();
        const maxByteLengthPerString = 99;

        if (encoder.encode(input).length <= maxByteLengthPerString) {
            AddTextComponentSubstringPlayerName(input);
            return;
        }

        let startIndex = 0;

        while (startIndex < input.length) {
            let endIndex = startIndex;
            let lastValidEnd = startIndex;

            while (endIndex < input.length) {
                const slice = input.substring(startIndex, endIndex + 1);
                if (encoder.encode(slice).length > maxByteLengthPerString) {
                    break;
                }
                lastValidEnd = endIndex + 1;
                endIndex++;
            }

            if (lastValidEnd === startIndex) {
                lastValidEnd = startIndex + 1;
            }

            const chunk = input.substring(startIndex, lastValidEnd);
            AddTextComponentSubstringPlayerName(chunk);
            startIndex = lastValidEnd;
        }
    }

    public draw() {
        const [screenw, screenh] = GetActiveScreenResolution();
        const height = 1080;
        const ratio = screenw / screenh;
        const width = height * ratio;
        const x = this.position.x / width;
        const y = this.position.y / height;

        SetTextFont(this.font);
        SetTextScale(1.0, this.scale);
        SetTextColour(this.color.r, this.color.g, this.color.b, this.color.a);

        if (this.shadow) {
            SetTextDropShadow();
        }
        if (this.outline) {
            SetTextOutline();
        }

        if (this.textAlignment === 0) {
            SetTextCentre(true);
        } else if (this.textAlignment === 2) {
            SetTextRightJustify(true);
            SetTextWrap(0, x);
        }

        if (this.wrap !== 0) {
            const xSize = (this.position.x + this.wrap) / width;
            SetTextWrap(x, xSize);
        }

        BeginTextCommandDisplayText("jamyfafi");
        UIResText.addLongString(this.caption);
        EndTextCommandDisplayText(x, y);
    }
}
