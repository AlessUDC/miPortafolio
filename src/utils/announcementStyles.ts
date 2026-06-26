/**
 * Genera las clases de estilo de Tailwind para los botones de filtro de prioridad.
 * Utiliza tokens semánticos adaptativos que reaccionan de manera nativa al modo oscuro.
 *
 * @param isSelected - Estado de selección del botón
 * @returns Cadena de clases de Tailwind CSS v4
 */
export function priorityFilterBtnClass(isSelected: boolean): string {
    // Clases base compartidas para mantener consistencia visual y transiciones suaves
    const baseClasses = "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-focus";

    if (isSelected) {
        // Cuando el botón está seleccionado, se usan los colores de marca activos fijados en el plan
        return `${baseClasses} bg-brand-blue text-white border border-brand-blue`;
    }

    // Cuando NO está seleccionado, se usan los nuevos tokens dinámicos (sin prefijos dark:)
    return `${baseClasses} bg-surface text-brand-gray-light border border-brand-gray-border hover:bg-brand-gray-bg`;
}