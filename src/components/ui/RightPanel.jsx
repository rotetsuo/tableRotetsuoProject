'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import TicketComments from './TicketComments'

export default function RightPanel({ open, onClose, ticket, onAddComment }) {

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-[#525252] py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-[#E8E8E8]">
                     {ticket?.title || 'Detalhes do Ticket'}
                  </DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6 text-sm text-gray-900 dark:text-[#E8E8E8]">
                    {ticket ? (
                        <>
                            <p><strong>Descrição:</strong></p>
                            <p>{ticket.description}</p>
                            <p><strong>Status:</strong> {ticket.status}</p>
                            <p><strong>Criado por:</strong> {ticket.creator}</p>            
                            <p><strong>Data de criação:</strong> {ticket.createdAt}</p>
                            <div className="mt-4">
                                <TicketComments
                                    comments={ticket.comments}
                                    onAddComment={onAddComment}
                                />                                    
                            </div>
                        </>
                        ) : (
                            <p>Nenhum ticket selecionado.</p>
                        )}
                    </div>
                </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
