const sliderCards = (
    cardContainerRef: React.RefObject<HTMLDivElement>,
    hasMounted: React.MutableRefObject<boolean>,
    typeCards: string,
    isAnimeted: boolean,
    timeInterval: number,
    inViwe: boolean
) => {
    if (!cardContainerRef.current || hasMounted.current) return
    hasMounted.current = true
    const cards = cardContainerRef.current.querySelectorAll(`.${typeCards}`)
    let cardSize = isAnimeted
        ? cards[0]?.clientHeight
        : cards[0]?.clientWidth + 64
    let restartValue = 0
    let count = 0

    const handleTransitionEnd = (element: HTMLElement) => {
        return () => {
            if (count === cards.length - 1) {
                element.style.transition = 'none'
                element.style.transform = isAnimeted
                    ? `translateY(0)`
                    : `translateX(1rem)`
            }
        }
    }

    const handleInterval = () => {
        if (inViwe) {
            clearInterval(idInterval)
        }

        if (isAnimeted && count === 0) {
            cardSize += 36
        }

        const currentSize = cardSize + restartValue
        count++
        count = count === cards.length ? 1 : count
        cards.forEach((item) => {
            const element = item as HTMLElement
            element.style.transition = 'transform 0.3s'
            element.style.transform = isAnimeted
                ? `translateY(${-currentSize}px)`
                : `translateX(${-currentSize}px)`
            element.style.transition = 'transform 0.3s'
            element.style.transform = isAnimeted
                ? `translateY(${-currentSize}px)`
                : `translateX(${-currentSize}px)`

            item.addEventListener('transitionend', handleTransitionEnd(element))
        })
        restartValue = count === cards.length - 1 ? 0 : currentSize
    }

    const idInterval = setInterval(handleInterval, timeInterval)

    return () => {
        cards.forEach((item) => {
            const element = item as HTMLElement
            item.removeEventListener(
                'transitionend',
                handleTransitionEnd(element)
            )
        })
    }
}

export const priceChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    isStatic: boolean
) => {
    if (isStatic) {
        const prices = [24.99, 47.49, 67.49, 99.99, 187.49, 262.49, 324.99]
        const index = Number(event.target.value)
        return prices[index]
    }

    const prices = [34.99, 62.99, 139.99, 244.99]
    const index = Number(event.target.value)

    return prices[index]
}

export default sliderCards
