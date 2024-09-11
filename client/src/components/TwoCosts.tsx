import { Label } from '@/components/ui/label'

function TwoCosts() {
  return (
    <div>
      <div>
        <Label>Cost total</Label>
        <h3>---€</h3>
      </div>
      <div>
        <Label>Cost per person</Label>
        <h3>-shouldn't be here-€</h3>
      </div>
    </div>
  )
}

export default TwoCosts
