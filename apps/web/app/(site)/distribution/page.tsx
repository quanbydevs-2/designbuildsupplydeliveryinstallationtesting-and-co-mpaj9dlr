"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/core/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/core/components/ui/table"
import { Badge } from "@/core/components/ui/badge"
import { Button } from "@/core/components/ui/button"

export default function DistributionPage() {
  const data: any[] = []

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Distributions</h1>
          <p className="text-sm text-muted-foreground">Manage all distributions</p>
        </div>
        <Button>+ Add New</Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Resource</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Distribution Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">No records found</TableCell>
                </TableRow>
              ) : data.map((row: any, i: number) => (
                <TableRow key={i}>
                  <TableCell>{String(row.resourceName ?? "-")}</TableCell>
                  <TableCell>{String(row.recipientName ?? "-")}</TableCell>
                  <TableCell>{String(row.quantity ?? "-")}</TableCell>
                  <TableCell>{String(row.distributionDate ?? "-")}</TableCell>
                  <TableCell><Badge variant="secondary">{row.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}