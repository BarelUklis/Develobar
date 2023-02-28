import { getAppDirection } from "@/utils/appDirection";

const DirectionLayout = ({ children }: { children: React.ReactNode }) => {
  const appDirection = getAppDirection();
  return (
    <div data-dir={appDirection} >
      {children}
    </div>
  )
}

export default DirectionLayout