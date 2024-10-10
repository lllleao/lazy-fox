import { ChangeEvent } from 'react'
import { OptionsContainer } from './styles'

type Props = {
    handleChange?: (evente: ChangeEvent<HTMLSelectElement>) => void
    isStaticSection: boolean
    valueSection: string
}

const OptionsProduct = ({
    handleChange,
    isStaticSection,
    valueSection
}: Props) => {
    if (isStaticSection) {
        return (
            <OptionsContainer
                className="price-values"
                name="price-values"
                id="price-values"
                onChange={(event) => handleChange && handleChange(event)}
                value={valueSection}
            >
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">5</option>
                <option value="4">10</option>
                <option value="5">15</option>
                <option value="6">20</option>
            </OptionsContainer>
        )
    }

    return (
        <OptionsContainer
            className="price-values"
            name="price-values"
            id="price-values"
            onChange={(event) => handleChange && handleChange(event)}
            value={valueSection}
        >
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">5</option>
            <option value="3">10</option>
        </OptionsContainer>
    )
}

export default OptionsProduct
