export class ScreenEffects
{
    static screenShake(element, duration)
    {
        element.classList.add('shaking');
        setTimeout(() => {
            element.classList.remove('shaking');
        }, duration);
    }
}