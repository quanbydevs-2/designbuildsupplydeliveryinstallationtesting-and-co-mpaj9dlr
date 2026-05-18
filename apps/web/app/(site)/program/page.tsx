"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/core/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/core/components/ui/table"
import { Badge } from "@/core/components/ui/badge"
import { Button } from "@/core/components/ui/button"

export default function ProgramPage() {
  const data: any[] = []

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Programs</h1>
          <p className="text-sm text-muted-foreground">Manage all programs</p>
        </div>
        <Button>+ Add New</Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Program Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
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
                  <TableCell>{String(row.title ?? "-")}</TableCell>
                  <TableCell>{String(row.description ?? "-")}</TableCell>
                  <TableCell>{String(row.startDate ?? "-")}</TableCell>
                  <TableCell>{String(row.endDate ?? "-")}</TableCell>
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