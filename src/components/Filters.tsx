import { type FilterValue } from "../types"
import { FILTERS_BUTTONS } from "../consts"

interface Props {
    filterSelected: FilterValue
    onFilterSelected: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterSelected }) => {
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    return (
                        <li key={key}>
                            <a
                                className={`${filterSelected === key ? 'selected' : ''}`}
                                href={href}
                                onClick={event => {
                                    event.preventDefault()
                                    onFilterSelected(key as FilterValue)
                                }}
                            >{ literal }</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}
