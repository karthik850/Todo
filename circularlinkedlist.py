
class Node:
    def __init__(self, data):
        self.data = data
        self.next=None

class LinkedList:
    def __init__(self):
        self.head = None
    def push(self, newData):
        newNode = Node(newData)
        newNode.next = self.head
        self.head = newNode
    def addelement(self, newData):
        newNode = Node(newData)
        if self.head is None:
            self.head = newNode
            return
        last = self.head
        while (last.next):
            last = last.next
        last.next = newNode
    def printList(self):
        temp = self.head
        while (temp):
            print(temp.data,end=" ")
            temp = temp.next
    def iscircular(self,n):
        if(n<0):
            return False
        else:
            if self.head is None:
                return False
            else:
                k=0
                pos=0
                last = self.head
                while (last.next):
                    if(k<n):
                        k+=1
                    elif(k==n):
                        pos=last
                    last = last.next
                    
                if(last.next == pos):
                    return True
                else:
                    return False
            


llist = LinkedList()
llist.printList()
while True:
    opt= input("do you want to insert data")
    if(opt.lower()=="y"):
        val=input("enter value")
        llist.addelement(val)       
    else:
        break
pos=int(input("enter position"))
print(llist.iscircular(pos))

