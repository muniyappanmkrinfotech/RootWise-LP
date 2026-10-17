import React, { memo } from 'react';
import { Plus, Minus } from 'lucide-react';

/**
 * FaqItem Component
 * Accessible accordion item with smooth CSS grid disclosure.
 *
 * @param {Object} props
 * @param {Object} props.faq - FAQ data object containing id, question, and answer
 * @param {boolean} [props.isOpen=false] - Whether this accordion item is expanded
 * @param {Function} props.onToggle - Callback invoked when trigger is clicked
 * @param {number} [props.index=0] - Numerical index for deterministic fallback IDs
 */
function FaqItem({
  faq,
  isOpen = false,
  onToggle,
  index = 0,
}) {
  if (!faq) return null;

  const { id = `item-${index}`, question = '', answer = '' } = faq;
  const triggerId = `faq-trigger-${id}`;
  const panelId = `faq-panel-${id}`;

  const handleClick = () => {
    if (onToggle) onToggle(index);
  };

  return (
    <div className="bg-white rounded-[18px] sm:rounded-[20px] border border-[#E2ECE5] transition-all duration-200 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#CFDDD4] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
      <h3 className="m-0 p-0 font-normal">
        <button
          id={triggerId}
          type="button"
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62] focus-visible:ring-offset-2"
        >
          <span className="text-lg font-bold text-[#11201D] tracking-tight leading-snug">
            {question}
          </span>
          <div
            aria-hidden="true"
            className="shrink-0 w-6 h-6 flex items-center justify-center text-[#2C6A62] transition-transform duration-200"
          >
            {isOpen ? (
              <Minus className="w-4 h-4 stroke-[2.4]" />
            ) : (
              <Plus className="w-4 h-4 stroke-[2.4]" />
            )}
          </div>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
            <p className="text-sm text-[#556460] leading-relaxed border-t border-[#F2F6F4] pt-3.5">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(FaqItem);
