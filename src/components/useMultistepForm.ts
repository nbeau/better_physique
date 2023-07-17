import { ReactElement, useState } from "react"

export function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })
    }

    function back() {
        setCurrentStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }

    function reset() {
        setCurrentStepIndex(0)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isThirdStep: currentStepIndex === 2,
        isLastStep: currentStepIndex === 3,
        reset,
        next,
        back,
    }
}
