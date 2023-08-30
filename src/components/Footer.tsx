import { Filters } from "./Filters"
import { type FilterValue } from "../types"

interface Props {
    activeCounts: number
    completedCounts: number
    onClearCompleted: () => void
    filterSelected: FilterValue
    onFilterSelected: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
    activeCounts,
    completedCounts,
    onClearCompleted,
    filterSelected,
    onFilterSelected
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCounts}</strong> Tareas pendientes
            </span>
            <Filters
                filterSelected = {filterSelected}
                onFilterSelected = {onFilterSelected}
            />
            {
                completedCounts > 0 && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}
                    >
                        Eliminar completados
                    </button>
                )
            }
        </footer>
    )
}
