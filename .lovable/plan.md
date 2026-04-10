

## Plan: Hide Question During Pause to Prevent Cheating

**Problem**: When a player pauses the quiz, the question remains visible in the background, allowing them to look up the answer.

**Solution**: Update the pause overlay in `QuizScreen.tsx` to fully obscure the quiz content. The pause overlay already covers the screen, but we'll also hide the question text and answer options underneath it so they can't be inspected via dev tools or screen readers.

### Changes

**`src/components/QuizScreen.tsx`**:
- When `paused` is true, hide the question text and answer options (render null or placeholder content instead of the actual question/options)
- The pause overlay already exists with `fixed inset-0 bg-background/90` — we'll make it fully opaque (`bg-background`) so nothing bleeds through
- The timer will remain frozen as it already does

This is a small, focused change — just conditionally hiding the question content and making the overlay fully opaque.

