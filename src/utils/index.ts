const sliderCards = (
    cardContainerRef: React.RefObject<HTMLDivElement>,
    hasMounted: React.MutableRefObject<boolean>,
    typeCards: string,
    isAnimeted: boolean,
    timeInterval: number
) => {
    if (!cardContainerRef.current || hasMounted.current) return
    hasMounted.current = true
    const cards = cardContainerRef.current.querySelectorAll(`.${typeCards}`)
    const cardSize = isAnimeted
        ? cards[0]?.clientHeight + 32
        : cards[0]?.clientWidth + 64
    let restartValue = 0
    let count = 0

    const handleTransitionEnd = (element: HTMLElement) => {
        return () => {
            if (count === cards.length - 1) {
                element.style.transition = 'none'
                element.style.transform = isAnimeted
                    ? `translateY(1rem)`
                    : `translateX(1rem)`
            }
        }
    }

    const handleInterval = () => {
        const currentSize = cardSize + restartValue
        count++
        count = count === cards.length ? 1 : count
        cards.forEach((item) => {
            const element = item as HTMLElement
            element.style.transition = 'transform 0.3s'
            element.style.transform = isAnimeted
                ? `translateY(${-currentSize}px)`
                : `translateX(${-currentSize}px)`

            item.addEventListener('transitionend', handleTransitionEnd(element))
        })
        restartValue = count === cards.length - 1 ? 0 : currentSize
    }

    setTimeout(() => {
        setInterval(handleInterval, timeInterval)
    }, 3000)

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

export default sliderCards
